let SqlLib = require("../sql/sqllib");
let Process = require("./process");
let Moment = require('moment')
var clear;
var processlist = [];

function datasync() 
{
    
}
datasync.prototype.Start = _Start;
datasync.prototype.DataTransfer = _DataTransfer;
datasync.prototype.Process = Process;

function _Start(pServiceType,pType,pTime) 
{
    for (let i = 0;i < Process.process_list.length;i++)
    {
        if(Process.process_list[i].name == pType)
        {
            if(pServiceType == 1)
            {
                console.log(Moment().format("HH:mm:ss") + pType + " Servis Başlatıldı.")
                Process.process_list[i].interval = true;
                clear = setTimeout(TransferLists,pTime,Process.process_list[i],pTime,pServiceType,pType);
                clear.type = pType;
                processlist.push(clear)
            }
            else if(pServiceType == 2)
            {
                for (let i = 0; i < processlist.length; i++) 
                {
                    if(processlist[i].type == pType)
                    {
                        clearTimeout(processlist[i]);
                        Process.process_list[i].interval = false;
                        console.log(Moment().format("HH:mm:ss") + pType + " Servis Durduruldu.")
                    }
                }
            }
        }
    }
}
async function TransferLists(pParam,pTime,pServiceType,pType)
{
    if(pParam.interval == true)
    {
        console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Aktarımı Başlatılıyor.")
        for (let i = 0; i < pParam.list.length; i++) 
        {
            pParam.list[i].source = pParam.source;
            pParam.list[i].target = pParam.target;
    
            await _DataTransfer({...pParam.list[i]});
        }
        
        console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Aktarımı Tamamlandı.")
        clear = setTimeout(TransferLists,pTime,pParam,pTime,pServiceType,pType);
        clear.type = pType;
    }
    else
    {
        for (let i = 0; i < processlist.length; i++) 
        {
            if(processlist[i].type == pType)
            {
                clearTimeout(processlist[i]);
                Process.process_list[i].interval = false;
                console.log(Moment().format("HH:mm:ss") + pType + " Servis Durduruldu.")
            }
        }
    }
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
        //console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Kayıtları Aktarılıyor.")
        let SData = await GetData(pParam.select,pParam.source);

        if(typeof SData.err != 'undefined')
        {
            //console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Get  İşleminde Hata 01: " + SData.err)
            resolve();
        }

        for (let i = 0;i < SData.length;i++)
        {
            if(typeof pParam.control != 'undefined')
            {
                //EĞER UPDATE AKTİF İSE KAYITLAR KONTROL EDİLİP UPDATE EDİLİYOR
               
                let CtrlData = await GetData(BuildQueryParam(pParam.control,SData[i]),pParam.target);

                if(typeof CtrlData.err == 'undefined')
                {   
                    if(CtrlData.length > 0)
                    {
                        //UPDATE
                        if(typeof pParam.update != 'undefined')
                        {
                            let TmpData = await Execute(BuildQueryParam(pParam.update,SData[i]),pParam.target);
                            if(typeof TmpData != 'undefined')
                            {
                                console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Update İşleminde Hata : " + TmpData.err)
                            }
                        }
                    }
                    else
                    {
                        //INSERT
                        let TmpData = await Execute(BuildQueryParam(pParam.insert,SData[i]),pParam.target);
                        if(typeof TmpData != 'undefined')
                        {
                            console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Insert İşleminde Hata 01 : " + TmpData.err)
                        }
                    }
                } 
                else
                {
                    console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Get İşleminde Hata 02 : " + CtrlData.err)
                }
            }
            else
            {
                //EĞER UPDATE AKTİF DEĞİLSE KAYITLAR SADECE İNSERT EDİLİYOR.KAYIT ÇAKIŞMASINDAN BEN MESUL DEĞİLİM.
                let TmpData = await Execute(BuildQueryParam(pParam.insert,SData[i]),pParam.target);
                if(typeof TmpData != 'undefined')
                {
                    console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Insert  İşleminde Hata 02: " + TmpData.err)
                }
            }
        }

        //console.log(Moment().format("HH:mm:ss") + ' ' + pParam.name + " Aktarımı Bitti.")
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
                resolve(JSON.parse(Data))
            }
            else
            {
                resolve(JSON.parse(Data).recordset);
            }
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
                resolve(JSON.parse(Data))
            }
            else
            {
                resolve();
            }
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