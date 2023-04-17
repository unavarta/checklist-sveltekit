<script>
    import { editNote} from '../../store/NoteStore';
    import { addNote, deleteNote} from '../../store/NoteStore';
    export let note;

    import { Textarea } from 'flowbite-svelte';

</script>


<div class="flex items-center justify-between border-2 border-white rounded-sm px-5 py-4 ">
    <div class="flex w-full max-w-none items-center justify-start border-white">
        
        <Textarea id={`${note.id}-text`}
        text={note.text}
        placeholder="Enter a Note"
        value={note.text}
        on:input={(e) => editNote(note.id, e.target.value)}
        class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed 
        border-code-border bg-code-border px-0 pb-1 text-base font-normal text-code-text 
        placeholder:text-code-placeholder focus:border-code-border focus:outline-none focus:ring-0"/>
        
    </div>

    <button type="button" 
    on:click={() => deleteNote(note.id)}
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

<style>

    
</style>