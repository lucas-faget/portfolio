import type { Actions } from "./$types";

export const actions = {
    send: async ({ request }) => {
        const data = await request.formData();
        const firstname = data.get("firstname");
        const lastname = data.get("lastname");
        const email = data.get("email");
        const message = data.get("message");

        console.log({ firstname, lastname, email, message });

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return { success: true };
    },
} satisfies Actions;
