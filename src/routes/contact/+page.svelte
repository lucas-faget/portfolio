<script lang="ts">
    import type { PageProps } from "./$types";
    import type { ContactForm } from "$lib/types/ContactForm.js";
    import { enhance } from "$app/forms";
    import Input from "$lib/components/Input.svelte";

    let { form }: PageProps = $props();

    let data: ContactForm = $state({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });

    let isSending: boolean = $state(false);
</script>

<div class="min-h-page flex items-center justify-center">
    <div class="w-full max-w-xl p-4">
        <h3 class="mb-4 border-b pb-2 text-2xl tracking-wide">Envoyez-moi un message</h3>

        <form
            method="POST"
            action="?/send"
            use:enhance={({ formElement, formData, action, cancel, submitter }) => {
                if (isSending) {
                    cancel();
                }

                isSending = true;

                return async ({ result, update }) => {
                    isSending = false;
                    update();
                };
            }}
            class="space-y-4"
        >
            <div class="flex flex-col gap-6 sm:flex-row">
                <label for="firstname" class="flex flex-1 flex-col gap-1.5">
                    <span class="font-medium">Prénom</span>
                    <Input type="text" id="firstname" bind:value={data.firstname} placeholder="Votre prénom" />
                </label>

                <label for="lastname" class="flex flex-1 flex-col gap-1.5">
                    <span class="font-medium">Nom</span>
                    <Input type="text" id="lastname" bind:value={data.lastname} placeholder="Votre nom" />
                </label>
            </div>

            <label for="email" class="flex flex-col gap-1.5">
                <span class="font-medium">Email</span>
                <Input type="email" id="email" bind:value={data.email} placeholder="Votre email" />
            </label>

            <label for="message" class="flex flex-col gap-1.5">
                <span class="font-medium">Message</span>
                <Input type="textarea" id="message" bind:value={data.message} placeholder="Votre message" />
            </label>

            <div class="flex justify-end">
                <button
                    type="submit"
                    disabled={isSending}
                    class="bg-foreground text-background hover:bg-foreground/90 disabled:bg-foreground/70 inline-flex h-12 items-center justify-center gap-2.5 rounded-lg px-4 text-base font-semibold active:scale-[0.98] active:transition-all disabled:cursor-not-allowed max-sm:w-full"
                >
                    {#if isSending}
                        <iconify-icon icon="lucide:loader-circle" class="animate-spin text-lg"></iconify-icon>
                    {:else}
                        <iconify-icon icon="lucide:send" class="text-lg"></iconify-icon>
                    {/if}
                    Envoyer
                </button>
            </div>
        </form>
    </div>
</div>
