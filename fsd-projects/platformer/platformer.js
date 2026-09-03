$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
    //toggleGrid();


    // TODO 2 - Create Platforms
    //createPlatfrom(x, y, width, height, color)
    createPlatform(200, 150, 10, 500)
    createPlatform(350, 250, 10, 400)
    createPlatform(300, 550, 50, 5)
    createPlatform(200, 450, 50, 5)
     createPlatform(300, 350, 50, 5)
       createPlatform(350, 175, 340, 5)
       createPlatform(0, 650, 250, 5)
       createPlatform(800, 100, 5, 400)
       createPlatform(750, 150, 5, 350)
       createPlatform(750,500,55,5)
       createPlatform(750,150,65,5)
       createPlatform(550,500,200,5)
       createPlatform(450,600,100,5)
       createBadPlatform(350,700,50,50)
       createBadPlatform(600,700,50,50)
       createPlatform(1125,600,100,5)
       createPlatform(900,500,100,5)
       createPlatform(900,375,100,5)
       createPlatform(1050,250,100,5)
       createPlatform(775,0,5,75)
       createPlatform(700, 375, 50, 5)
       createPlatform(650, 275, 50, 5)
       createBadPlatform(0,150,200,500)




    // TODO 3 - Create Collectables
    //createCollectable(type, x, y, gravity, bounce)
    createCollectable("database",480,700,0,0)
    createCollectable("database",810,100,0,0)
    createCollectable("database",655,235,0,0)
    createCollectable("database",100,100,0.0001,0)



    
    // TODO 4 - Create Cannons
    //createCannon(side, position ,delay)
    createCannon("top",285,1500)
    createCannon("top",375,2500)
    createCannon("right",175,3000)
    createCannon("top",1000,2000)
    createCannon("top",1175,2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
