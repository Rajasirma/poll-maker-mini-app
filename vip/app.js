const tg=window.Telegram?.WebApp;
tg?.ready();
tg?.expand();

function go(action){
  const payload=JSON.stringify({action});
  if(tg && typeof tg.sendData==="function"){
    tg.sendData(payload);
    return;
  }
  const u="https://t.me/Vipverifyguardianbot?start=app_"+encodeURIComponent(action);
  if(tg?.openTelegramLink) tg.openTelegramLink(u);
  else window.open(u,"_blank");
}

document.querySelectorAll("[data-action]").forEach((b)=>{
  b.addEventListener("click",(e)=>{
    e.preventDefault();
    go(b.dataset.action);
  });
});

const menu=document.getElementById("menu");
if(menu) menu.addEventListener("click",()=>go("help"));