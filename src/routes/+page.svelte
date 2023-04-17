<script>
    import AddTodoSection from '../lib/components/todos/AddTodoSection.svelte';
    import TodoSection from '../lib/components/todos/TodoSection.svelte';
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
        <h1 class="text-2xl font-bold text-code-text">Dashboard</h1>
        <div class="mt-10">
            <AddTodoSection />
            <TodoSection />
        </div>
    </main>
</div>