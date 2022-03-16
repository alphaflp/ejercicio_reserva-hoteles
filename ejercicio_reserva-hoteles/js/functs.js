function fadt(objsel1){
    var numadt=objsel1.value;//Cogemos el valor del select
    var n_adt=document.getElementsById("n-adt");//div-nombre
    var e_adt=document.getElementsById("e-adt");//div-edad
    //Hay que tener en cuenta que quizas ya hubiera inputs.
    //opt 1: borrar todo lo de antes.
    n_adt.innerHTML="";
    e_adt.innerHTML="";
    for (i=0;i<=numadt;i++){
        n_adt.document.appendChild(na_inp);
        e_adt.document.appendChild(ea_inp);
    }
   const na_inp = document.createElement("input");
    na_inp.type="text";
    const ea_inp = document.createElement("input");
    ea_inp.type="number";
}