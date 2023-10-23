
interface Task {
    id: number;
    name: string;
    completed: boolean;
}

const tarea1: Task = {id:1, name:'limpieza', completed:false};
const tarea2: Task = {id:2, name:'comer', completed:false};
const tarea3: Task = {id:3, name:'recoger', completed:false};

const tareas:Task[] = [tarea1, tarea2, tarea3]; 

// console.log (tareas);


class TaskList {
    tareas: Task[];
   
    constructor(tareas: Task[]) {
        this.tareas = tareas;
    } 

    //MÉTODOS

    addTask(task: Task):void {  //añade una tarea al arreglo
        this.tareas.push(task);
    }

    removeTask(id: number): void {  //elimina una tarea del arreglo
        let borrar:number = -1;
        this.tareas.forEach((item, index) => {
            if(item.id == id){
                borrar = index;
            }
        });
        if (borrar>= 0) {
            this.tareas.splice(borrar,1);
        }
    }

    completeTask(id: number):Task[] {  //pone una tarea como completada
        for (const tarea of this.tareas) {
            if(tarea.id == id){
                console.log('se completa la tarea con id: ' + tarea.id);
                tarea.completed = true;
                break;
            }
        }
        return tareas;
    }

    printTask() {  //imprime el arreglo de tareas
        for (const tarea of this.tareas) {
            console.log('id: ' + tarea.id + ',', 
                        'name: ' + tarea.name + ',', 
                        'completed: ' + tarea.completed)
        }
    }
    
}



const arregloTareas = new TaskList(tareas);-  //se crea instancia de TaskList()

console.log('Se imprime la instancia creada de TaskList[]');
arregloTareas.printTask(); //se imprime el arreglo

const tarea4: Task = {id:4, name:'cenar', completed:false}; //Creo una cuarta tarea
console.log('Se agrega una cuarta tarea al arreglo');
arregloTareas.addTask(tarea4);
arregloTareas.printTask();


console.log('Se modifica el estado a completado de la tarea con id 2')
arregloTareas.completeTask(2);
arregloTareas.printTask();


console.log('Se elimina la tarea con id 3');
arregloTareas.removeTask(3);
arregloTareas.printTask();
  
  
  