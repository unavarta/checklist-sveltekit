<script>
    import { editTodo } from '../../store/TodoStore';
    import { addTodo, deleteTodo, toggleTodo} from '../../store/TodoStore';
    export let todo;

    $: completeClass = todo.complete ? 'bg-code-green text-code-bg' : 'bg-code-bg text-code-text';
</script>


<div class="flex items-center justify-between  border-2 border-code-bg rounded-sm px-5 py-4 ">
    <div class="flex w-full max-w-none items-center justify-start">
        <label for={`${todo.id}-checkbox`} class="sr-only">Complete To-Do</label>
        <input
            id={`${todo.id}-checkbox`}
            type="checkbox"
            checked={todo.complete}
            on:change={() => toggleTodo(todo.id)}
            class="h-4 w-4 rounded border border-code-border  focus:ring-code-green
            text-code-green focus:border-code-green focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-code-green"
            />
        
        <label for={`${todo.id}-checkbox`} class="sr-only">Edit To-Do</label>
        <input 
            id={`${todo.id}-text`}
            text={todo.text}
            placeholder="Enter a To-Do"
            value={todo.text}
            on:input={(e) => editTodo(todo.id, e.target.value)}
            class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed 
            border-code-border bg-code-border px-0 pb-1 text-base font-normal text-code-text 
            placeholder:text-code-placeholder focus:border-code-border focus:outline-none focus:ring-0"
            />
        <span
            class="{completeClass} ml-5 hidden rounded-md py-0.5 px-2 text-s font-medium md:block"
        >
            {todo.complete ? 'Complete' : 'Incomplete'}
        </span>
    </div>
    <button type="button" 
    on:click={() => deleteTodo(todo.id)}
    class="group ml-4 flex outline outline-2 outline-code-text hover:outline-code-green items-center justify-center rounded-md bg-code-border border-code-text p-2 hover:bg-code-green focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-code-green"
    >
        <span></span>
        <svg
        class="stroke-code-text hover:stroke-code-bg" 
        width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10.8824V19.3529M16 10.8824V19.3529M22 5.23529V22.1765C22 23.7359 20.6569 25 19 25H7C5.34314 25 4 23.7359 4 22.1765V5.23529M1 5.23529H25M17.5 5.23529V3.82353C17.5 2.26414 16.1569 1 14.5 1H11.5C9.84314 1 8.5 2.26414 8.5 3.82353V5.23529" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
    </button>
</div>