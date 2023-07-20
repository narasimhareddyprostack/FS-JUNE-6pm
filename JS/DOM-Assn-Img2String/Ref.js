let imageFile = event.target.files[0];
let reader = new FileReader();
reader.readAsDataURL(imageFile);
reader.result()
reader.addEventListener('load', () => {
    if (reader.result) {
        setSelectedProduct({
            ...selectedProduct,
            image: reader.result
        });
    }