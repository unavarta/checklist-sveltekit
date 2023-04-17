<script>
    import NoteInput from "./NoteInput.svelte";
    import { notes } from "../../store/NoteStore";
</script>

<section class="mt-8 space-y-4">
    {#each $notes as note (note.id)}
        <NoteInput {note} />    
    {/each}
</section>