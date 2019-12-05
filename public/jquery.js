$(document).ready(function(){
    $('.icon-right').click(function(){
        $('.side-menu').toggle();
    })

    $('#defaultImage').click(function(){
        $('#imageUpload').trigger('click')
    })
    
    $('#imageUpload').change(function(){
        var fileType = ["image/jpeg","image/jpg","image/png"]
        var input = document.querySelector('#imageUpload')
        var file = input.files[0]
        if(fileType.indexOf(file.type) != -1){
            var imgURL = URL.createObjectURL(file)
            $('#defaultImage').attr('src',imgURL)
            $('#groupImageError').text('')
        }
        else{
            $('#groupImageError').text('Upload valid image file')
        }
    })
})