let renderer = new Renderer()
let foodManager = new FoodManager()

// remove food from table and update boolean to false
$("body").on("click", ".req-input", async function(){
    console.log($(this).prev("#name"))
    await foodManager.updateFood($(this).siblings("#name").attr('data-id'))
    $(this).closest("#tableRow").remove()
})
//send data to the food DB and remove row from view
$(`body`).on("click", '#restBtn', function () {
    let foodData = {
            name: $("#food").val(),
            expirationDate: $("#exp").val(),
            amount: $("#amount").val(),
            unit: $("#unit").val(),
            restaurant:foodManager.userData._id
        }
        foodManager.inputRestData(foodData)
        console.log( $(`input`).val())
    })

$(`#loginBtn`).click(async function(){
    console.log(`working btn`)
    let data = await foodManager.login($(`#username`).val())
    if(data.type===`org`){
        renderer.renderOrg(data)
    } else if(data.type === `rest`){
        renderer.renderRest(data)
    }
})