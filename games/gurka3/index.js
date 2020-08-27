$("document").ready(function() 
{
    class Cucumber 
    {
        
        constructor() 
        {
            this.count = 0;
            this.speed = 0;
        }
        
        click() 
        {
            this.speed += 0.03 / Math.max((this.speed / 10), 1);
        }
        
        tick() 
        {
            this.count += this.speed;
            this.speed -= this.speed / 25;
            $("#cucumber").css("transform", `rotate(${this.count * 360}deg)`);
            $("#cucumber-count").html(`<h1 id="cucumber-count">${Math.floor(this.count)}</h1>`)
        }
    }
    
    let cucumber = new Cucumber();

    class Shop 
    {
        
        canAfford() 
        {
            return cucumber.count >= this.cost;
        }
        
        purchase() 
        {
            if(this.canAfford())
            {
                cucumber.count -= this.cost;
                this.count++;
                let self = this;
                $(`#shop-${this.id} h1`).text(self.count);
            }
        }
        
        constructor(name, cost) 
        {
            this.name = name;
            this.cost = cost;
            this.count = 0;

            this.id = Math.floor(Math.random() * 999999999);

            $("#shop-container").append(`
            <div class="shop" id="shop-${this.id}">
                <h1>${this.count}</h1>
                <p>${this.name}</p>
                <p>${this.cost} gurkor</p>    
            </div>
            `);

            let self = this;

            $(`#shop-${this.id}`).on('click', function() { self.purchase(); });

            $(`#shop-${this.id}`).on('mouseenter', function() 
            {
                if(!self.canAfford()) {
                    $(this).css("background-color", "#ff0033");
                }
            });

            $(`#shop-${this.id}`).on('mouseleave', function() { $(this).css("background-color", "lightblue"); });
        }
    }

    setInterval(function() 
    {
        cucumber.tick();
    }, 10);

    $("#cucumber").on("click", function() 
    {
        cucumber.click();
    });

    new Shop("Ica Nära", 15);
    new Shop("Coop Konsum", 15);
    new Shop("Ica Kvantum", 15);
    new Shop("City Gross", 15);
    new Shop("Stora Coop", 15);
    new Shop("Ica Maxi", 15);
    
});