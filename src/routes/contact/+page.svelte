<script lang="ts">
    import type { PageProps } from "./$types";
    import type { ContactForm } from "$lib/types/ContactForm.js";
    import { m } from "$lib/i18n/messages";
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
        <h3 class="mb-4 border-b pb-2 text-2xl tracking-wide">{m.contact_form_title()}</h3>

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
                    <span class="font-medium">{m.contact_form_firstname_label()}</span>
                    <Input
                        type="text"
                        id="firstname"
                        bind:value={data.firstname}
                        placeholder={m.contact_form_firstname_placeholder()}
                    />
                </label>

                <label for="lastname" class="flex flex-1 flex-col gap-1.5">
                    <span class="font-medium">{m.contact_form_lastname_label()}</span>
                    <Input
                        type="text"
                        id="lastname"
                        bind:value={data.lastname}
                        placeholder={m.contact_form_lastname_placeholder()}
                    />
                </label>
            </div>

            <label for="email" class="flex flex-col gap-1.5">
                <span class="font-medium">{m.contact_form_email_label()}</span>
                <Input
                    type="email"
                    id="email"
                    bind:value={data.email}
                    placeholder={m.contact_form_email_placeholder()}
                />
            </label>

            <label for="message" class="flex flex-col gap-1.5">
                <span class="font-medium">{m.contact_form_msg_label()}</span>
                <Input
                    type="textarea"
                    id="message"
                    bind:value={data.message}
                    placeholder={m.contact_form_msg_placeholder()}
                />
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
                    {m.contact_form_button()}
                </button>
            </div>
        </form>
    </div>
</div>
