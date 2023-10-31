document.addEventListener("DOMContentLoaded", function(){
    const fileInput = document.getElementById('folder');

    fileInput.addEventListener('change', function () {
      const files = fileInput.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileURL = URL.createObjectURL(file);
        console.log(fileURL);
}});
});