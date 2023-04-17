<script>
    import { addNote } from '../../store/NoteStore';
</script>

<section class="flex justify-between items-center ">
    <h3 class="text-xl font-bold text-code-text ">Note List</h3>
    <button
        class="group flex items-center
        rounded-md border-code-text border-2 px-6 py-3 text-lg 
        font-semibold text-code-text outline-2 outline-offset-2
        outline-code-text hover:outline-gruvlight-blue
        hover:text-code-bg hover:border-code-border hover:bg-code-green focus-visible:outline-gruvlight-blue
        "
        type="button"
        on:click={addNote}
        > Add Note +
    </button>
</section>