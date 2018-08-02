      function wipeGrid(){
          var gridSelector = document.querySelectorAll('.gridBox');
          gridSelector.forEach(div => div.style.background = 'lightgrey');
      };

      function resizeGrid(){
          wipeGrid();
          var boxCountStart = prompt("enter a number between 16 and 64");

          if(boxCountStart > 15 && boxCountStart < 65){
                  var boxes = 0
                  var selectBody = document.querySelector("#grid");
                  var addBox = document.createElement("div");
                  var boxDimensions = (boxCountStart * boxCountStart);
                  var fragment = document.createDocumentFragment( );

                  function rowsAndColumns() {
                    var selectBody = document.querySelector("#grid");
                    var gridTemplateColumns = 'repeat('+boxCountStart+', 1fr)';
                    selectBody.style.gridTemplateColumns= gridTemplateColumns;
                    selectBody.style.gridTemplateRows= gridTemplateColumns;
                  };

                  function hoverColor(){
                    document.querySelector("#grid").addEventListener('mouseover', function(event) {
                      event.target.style.backgroundColor = "grey";
                    } );
                  };

                  function boxesLoop(){
                    for (var i = 0; i < boxDimensions ; i++) {
                      var addBox = document.createElement("div");
                      addBox.classList.add("gridBox");
                      addBox.textContent = (" ");
                      fragment.appendChild(addBox);
                      if (i == boxDimensions){
                        return;
                      };
                    };
                  };

                  function addBoxToScreen(){
                    document.querySelector("#grid").appendChild(fragment);
                  };


          } else{
            resizeGrid();
            boxesLoop();
            rowsAndColumns();
            hoverColor();
            addBoxToScreen();
         };
          var selectBody = document.querySelector("#grid");
          while (selectBody.firstChild) {
              selectBody.removeChild(selectBody.firstChild);
          };

          boxesLoop();
          rowsAndColumns();
          hoverColor();
          addBoxToScreen();
      };

var clearGrid = document.querySelector('#erase');
clearGrid.addEventListener('click', wipeGrid);

var changeSize = document.querySelector('#erase');
changeSize.addEventListener('click', resizeGrid);


resizeGrid();
