(function(){
  let language=localStorage.getItem("portfolioLanguageV2")==="vi"?"vi":"en";
  const pages=[...document.querySelectorAll("[data-language]")];
  const toggle=document.getElementById("cv-language");
  const actionLabel=document.querySelector("[data-action-label]");
  function apply(){
    document.documentElement.lang=language;
    pages.forEach(page=>page.hidden=page.dataset.language!==language);
    toggle.innerHTML=language==="en"?"<span>VI</span><span>/</span><strong>EN</strong>":"<strong>VI</strong><span>/</span><span>EN</span>";
    actionLabel.textContent=language==="en"?"Print":"In CV";
    document.title=language==="en"?"Nguyen Tien Thuong | CV":"Nguyễn Tiến Thương | CV";
  }
  toggle.addEventListener("click",()=>{language=language==="en"?"vi":"en";localStorage.setItem("portfolioLanguageV2",language);apply()});
  document.getElementById("print-cv").addEventListener("click",()=>window.print());
  apply();
})();
