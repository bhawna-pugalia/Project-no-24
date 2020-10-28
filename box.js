class box
{
	constructor(x,y,width,height)
	{
        this.body=Bodies.rectangle(x,y,width,height, {isStatic:true})
        this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		
		World.add(world, this.body)
		

	}
	display()
	{
			var pos=this.body.position;
			rectMode(CENTER)
			//strokeWeight(4);
			fill("red")
			//stroke(255)
		
			rect(pos.x,pos.y,this.width, this.height);
			
			
    }
}