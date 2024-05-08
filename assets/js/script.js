    
    const botao = document.querySelector('.button_add_task');
    const input = document.querySelector('.input_task');
    const completlist = document.querySelector('.list_task');
    let myitemlist = [];

    function addnewtask() {
        if (input.value.trim() !== '') { // Verifica se o campo não está vazio
            myitemlist.push({
                task: input.value,
                conclude: false
            });
            input.value = ''; // Limpa o campo de entrada após adicionar a tarefa
            showtask();
        }
    }

    function showtask() {
        let newLi = '';

        myitemlist.forEach((tasK, index) => {
            newLi += `
                <li class="task ${tasK.conclude && "done"}" >
                    <img src="assets/img/checked.png" alt= "check" onclick="concludetask(${index})">
                    <p>${tasK.task}</p>
                    <img src="assets/img/trash.png" alt= "trash" onclick="deletaritem(${index})">
                </li>`;
        });

        completlist.innerHTML = newLi;

        localStorage.setItem('lista', JSON.stringify(myitemlist))
    }

    function deletaritem(index){
        myitemlist.splice(index, 1)
    
        showtask() 
    }

    function concludetask(index){
        myitemlist[index].conclude= !myitemlist[index].conclude
        showtask()
    }

    function itemrecharg(){
        const localstoragetask = localStorage.getItem('lista')

        if (localstoragetask) {
            myitemlist = JSON.parse(localstoragetask)
       }
        showtask()
   
   
    }



    itemrecharg()
    botao.addEventListener('click', addnewtask)


    

    


   
