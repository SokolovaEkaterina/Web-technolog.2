function handleForm()
{
    console.log(document.Kva.name.value);
    console.log(document.Kva.email.value);
    console.log(document.Kva.num.value);
    console.log(document.Kva.answear_2.checked);
    console.log(document.Kva.answear_22.checked);
    console.log(document.Kva.answear_23.checked);
for (i=0;i<document.Kva.answear_1.length;i++)
{
    if(document.Kva.answear_1[i].checked)
    {
        console.log(document.Kva.answear_1[i].value)
    }
}
}