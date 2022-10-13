interface AssigneeId {
    value: string;
}

function uuid () {
}

function richText() {

}

class RichText {
    constructor() {
        this.value = richText();
    }
}

class AssigneeId {
    constructor() {
        this.value = uuid();
    }
}

class Tag {
    constructor(name) {
        this.taskId = uuid();
        this.name = name;
    }
}

class AuthorId {
    constructor() {
        this.value = uuid();
    }
}

interface Props {
    name: string;
    assigneeId: AssigneeId;
    authorId: AuthorId;
    description: RichText;
    tags: Tag[];
}

class Task {
    private constructor(props) {
        this.props = props;
    }

    get name () {
        return this.props.name;
    }

    static make(props: Props) {
        // validate
        // return either<ValidationError, Task>    

        return new Task(props);
    }
}

interface CreateTaskDTO {
    name: string;
    assigneeId: AssigneeId;
    authorId: AuthorId;
    description: string;
}

class CreateTaskUseCase {
    async execute(createTaskDTO: CreateTaskDTO) {
        let task = Task.make(createTaskDTO);

        await TaskRepository.create(task);
    }
}