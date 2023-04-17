<script>
    import AddNote from '../../lib/components/todos/AddNote.svelte';
    import Header from '../../lib/components/Header.svelte';
  import NoteSection from '../../lib/components/todos/NoteSection.svelte';
</script>
<svelte:head>
    <title>Checklist App</title>
</svelte:head>
<div class="min-h-screen bg-code-bg p-0 selection:bg-gruvlight-border md:py-24 md:px-8"> 
    <main
    class="mx-auto min-h-screen max-w-none rounded-none
    bg-code-border x-5 py-10 md:rounded-md 
    md:min-h-max md:max-w-[80rem]  
    md:px-8 
     md:outline-code-border">
     <Header />
        <h1 class="text-2xl font-bold text-code-text ">Write down Notes</h1>
        <div class="mt-10">
            <AddNote />
            <NoteSection />
        </div>
    </main>
</div>  