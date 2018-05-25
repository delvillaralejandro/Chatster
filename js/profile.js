var inputs = $("input");
var btnEdit = $("#btn-edit-profile");
var btnUpdate = $("#btn-update");
var updating = false;

inputs.each(function(index){
    $(inputs[index]).addClass("active");
});

btnEdit.click(function(){
    if(updating){
        updating = false;
        inputs.each(function(index){
            $(inputs[index]).prop("disabled",true);
        });
    
        $(this).text("Editar Informacion");
        $(this).parent().removeClass("col s6");
        $(this).parent().addClass("col s12");
        btnUpdate.parent().css("display","none");
    }
    else{
        updating = true;
        inputs.each(function(index){
            $(inputs[index]).prop("disabled",false);
        });
    
        $(this).text("Cancelar");
        $(this).parent().removeClass("s12");
        $(this).parent().addClass("s6");
        btnUpdate.parent().css("display","inline-block");
    }    
});

btnUpdate.click(function(){
    updating = false;
    inputs.each(function(index){
        $(inputs[index]).prop("disabled",true);
    });

   btnEdit.text("Editar Informacion");
   btnEdit.parent().removeClass("col s6");
   btnEdit.parent().addClass("col s12");
   $(this).parent().css("display","none");
})