// This stores the position of the current item being dragged

const position = {x: 0, y: 0};

var index = 1;

interact(".image")
  .draggable({
    // By setting manualStart to true - we control the manualStart.
    // We need to do this so that we can clone the object before we begin dragging it.
    manualStart: true,
    listeners: {
      move(event) {
        position.x += event.dx;
        position.y += event.dy;
        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      }
    }
  })
  // This only gets called when we trigger it below using interact.start(...)
  .on("move", function (event) {
      const {currentTarget, interaction} = event;
      let element = currentTarget;

      // If we are dragging an item from the sidebar, its transform value will be ''
      // We need to clone it, and then start moving the clone
      if (
        interaction.pointerIsDown &&
        !interaction.interacting() &&
        currentTarget.style.transform === ""
      ) {
        element = currentTarget.cloneNode(true);

        // Add absolute positioning so that cloned object lives right on top of the original object
        element.style.position = "absolute";
        element.style.left = 0;
        element.style.top = 0;

        element.id = element.id + index;
        index++;

        // Add the cloned object to the document
        const container = document.querySelector(".block-right");
        container && container.appendChild(element);

        // alert($(".block-right #rect2").length); // В ДИВЕ BLOCK-RIGHT ЕСТЬ ГРЁБАНЫЕ ЭТИ ФИГУРЫ

        const {offsetTop, offsetLeft} = currentTarget;
        position.x = offsetLeft;
        position.y = offsetTop;

        // If we are moving an already existing item, we need to make sure the position object has
        // the correct values before we start dragging it

      } else if (interaction.pointerIsDown && !interaction.interacting()) {

        // ТУТ ДВИГАЮТСЯ УЖЕ СУЩЕСТВУЮЩИЕ ФИГУРКИ

        const regex = /translate\(([\d]+)px, ([\d]+)px\)/i;
        const transform = regex.exec(currentTarget.style.transform);

        if (transform && transform.length > 1) {
          position.x = Number(transform[1]);
          position.y = Number(transform[2]);
        }
      }

      // Start the drag event
      interaction.start({name: "drag"}, event.interactable, element);

    }
  ).on("click", function init(event) {
    if (event.target.id !== "rect" && event.target.id !== "oval" && event.target.id !== "kvadrat" && event.target.id !== "trega" && event.target.id !== "tetraedr" && event.target.id !== "krug") {

      event.target.style.width = output1.innerText + 'px';
      event.target.style.height = output2.innerText + 'px';

      //  $("#" + event.target.id).resizable();


    }
  }
);



