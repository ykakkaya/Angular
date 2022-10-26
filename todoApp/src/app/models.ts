

export class Model{
    user:any;
    items:any;
    constructor(){
        this.user="YAKUP";
        this.items=[new ToDoItem("kahvaltı",false),
        new ToDoItem("spor",false),
        new ToDoItem("ders",false),
        new ToDoItem("video",false),
        new ToDoItem("temizlik",false),]


    }

}

export class ToDoItem{
    description:string;
    action:boolean;


    constructor(description: string,action: boolean)
    {
        this.description=description;

        this.action=action

    }
}