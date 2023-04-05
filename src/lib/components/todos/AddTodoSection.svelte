<script>
    import { addTodo } from '../../store/TodoStore';
</script>

<section class="flex justify-between ">
    <h3 class="text-xl font-bold text-code-text ">Checklist</h3>
    <button
        class="group flex items-center
        rounded-md border-code-text border-2 px-6 py-3 text-lg 
        font-semibold text-code-text outline-2 outline-offset-2
        outline-code-text hover:outline-gruvlight-blue
        hover:text-code-bg hover:border-code-border hover:bg-code-green focus-visible:outline-gruvlight-blue
        "
        type="button"
        on:click={addTodo}
        > Add Task +
    </button>
</section>