let SqlLib = require("../sql/sqllib");
let Process = require("./process");
let Moment = require('moment')

function datasync() 
{

}
datasync.prototype.Start = _Start;
datasync.prototype.DataTransfer = _DataTransfer;
datasync.prototype.Process = Process;

function _Start() 
{
    console.log(Moment().format("HH:mm:ss") + " Servis Başlatıldı.")
    for (let i = 0;i < Process.process_list.length;i++)
    {
        if(typeof Process.process_list[i].name != 'undefined')
        {
            if(typeof Process.process_list[i].auto != 'undefined')
            {
                setTimeout(TransferLists,Process.process_list[i].auto,{...Process.process_list[i]});
            }
        }
        else
        {
            for (let x = 0; x < Process.process_list[i].list.length; x++) 
            {
                if(typeof Process.process_list[i].list[x].auto != 'undefined')
                {
                    setTimeout(TransferSingle,Process.process_list[i].list[x].auto,{...Process.process_list[i].list[x]});
                }
            }
        }
    }
}
async function TransferLists(pParam)
{
    console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Aktarımı Başlatılıyor.")
    for (let i = 0; i < pParam.list.length; i++) 
    {
        pParam.list[i].source = pParam.source;
        pParam.list[i].target = pParam.target;

        await _DataTransfer({...pParam.list[i]});
    }

    console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Aktarımı Tamamlandı.")
    setTimeout(TransferLists,pParam.auto,{...pParam});
}
async function TransferSingle(pParam)
{
    await _DataTransfer({...pParam});
    setTimeout(TransferSingle,pParam.auto,{...pParam})
}
function _DataTransfer(pParam)
{
    return  new Promise(async resolve =>
    {
        console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Kayıtları Aktarılıyor.")
        let SData = await GetData(pParam.select,pParam.source);
        
        for (let i = 0;i < SData.length;i++)
        {
            if(typeof pParam.control != 'undefined')
            {
                //EĞER UPDATE AKTİF İSE KAYITLAR KONTROL EDİLİP UPDATE EDİLİYOR
                let CtrlData = await GetData(BuildQueryParam(pParam.control,SData[i]),pParam.target);
                if(typeof CtrlData != 'undefined')
                {
                    if(CtrlData.length > 0)
                    {
                        //UPDATE
                        if(typeof pParam.update != 'undefined')
                        {
                            await Execute(BuildQueryParam(pParam.update,SData[i]),pParam.target);
                        }
                    }
                    else
                    {
                        //INSERT
                        await Execute(BuildQueryParam(pParam.insert,SData[i]),pParam.target);
                    }
                } 
            }
            else
            {
                //EĞER UPDATE AKTİF DEĞİLSE KAYITLAR SADECE İNSERT EDİLİYOR.KAYIT ÇAKIŞMASINDAN BEN MESUL DEĞİLİM.
                await Execute(BuildQueryParam(pParam.insert,SData[i]),pParam.target);
            }
        }
        console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Aktarımı Bitti.")
        resolve();
    });
}
function GetData(pQuery,pConnet)
{
    return new Promise(resolve =>
    {
        let TmpSql = new SqlLib(pConnet.server,pConnet.database,pConnet.uid,pConnet.pwd,0);

        if(typeof pQuery == 'function')
        {
            pQuery = pQuery();
        }

        TmpSql.QueryPromise(pQuery,function(Data)
        {
            if(typeof JSON.parse(Data).err != 'undefined')
            {
                console.log(JSON.parse(Data).err)
            }
            resolve(JSON.parse(Data).recordset);
        });
    });
}
function Execute(pQuery,pConnet)
{
    return new Promise(resolve =>
    {
        let TmpSql = new SqlLib(pConnet.server,pConnet.database,pConnet.uid,pConnet.pwd,0);

        if(typeof pQuery == 'function')
        {
            pQuery = pQuery();
        }

        TmpSql.QueryPromise(pQuery,function(Data)
        {
            if(typeof JSON.parse(Data).err != 'undefined')
            {
                console.log(JSON.parse(Data).err)
            }
            resolve();
        });
    });
}
function BuildQueryParam(pQuery,pData)
{
    if(typeof pQuery == 'function')
    {
        pQuery = pQuery();
    }
    let TmpValue = [];
    for(let i = 0;i < pQuery.param.length;i++)
    {
        let Column = "";
        let Type = "";

        if(pQuery.param[i].split(':').length > 1)
        {
            Column = pQuery.param[i].split(":")[0]
            Type = pQuery.param[i].split(":")[1];            
        }
        else
        {
            Column = pQuery.param[i];
        }
        
        TmpValue.push(pData[Column]);
        
    }
    
    if(TmpValue.length > 0)
    {
        pQuery.value = TmpValue;
    }
    return pQuery;
}
module.exports = datasync;