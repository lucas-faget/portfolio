<script lang="ts">
    import type { TimelineItem } from "$lib/types/TimelineItem";
    import { m } from "$lib/i18n/messages";
    import * as Layout from "$lib/components/layout";
    import Timeline from "$lib/components/Timeline.svelte";

    const bio: string[] = [m.bio_1(), m.bio_2()];

    const workExperience: TimelineItem[] = [
        {
            title: m.xp_1_title(),
            meta: [
                { icon: "lucide:calendar", label: m.xp_1_period() },
                { icon: "lucide:building-2", label: m.xp_1_company() },
                { icon: "lucide:map-pin", label: m.xp_1_location() },
            ],
            description: m.xp_1_description(),
            icon: "lucide:briefcase",
        },
        {
            title: m.xp_2_title(),
            meta: [
                { icon: "lucide:calendar", label: m.xp_2_period() },
                { icon: "lucide:building-2", label: m.xp_2_company() },
                { icon: "lucide:map-pin", label: m.xp_2_location() },
            ],
            description: m.xp_2_description(),
            icon: "lucide:briefcase",
        },
        {
            title: m.xp_3_title(),
            meta: [
                { icon: "lucide:calendar", label: m.xp_3_period() },
                { icon: "lucide:building-2", label: m.xp_3_company() },
                { icon: "lucide:map-pin", label: m.xp_3_location() },
            ],
            description: m.xp_3_description(),
            icon: "lucide:briefcase",
        },
    ];

    const education: TimelineItem[] = [
        {
            title: m.edu_1_title(),
            meta: [
                { icon: "lucide:calendar", label: m.edu_1_period() },
                { icon: "lucide:school", label: m.edu_1_school() },
                { icon: "lucide:map-pin", label: m.edu_1_location() },
            ],
            description: m.edu_1_description(),
            icon: "lucide:graduation-cap",
        },
        {
            title: m.edu_2_title(),
            meta: [
                { icon: "lucide:calendar", label: m.edu_2_period() },
                { icon: "lucide:school", label: m.edu_2_school() },
                { icon: "lucide:map-pin", label: m.edu_2_location() },
            ],
            description: m.edu_2_description(),
            icon: "lucide:graduation-cap",
        },
        {
            title: m.edu_3_title(),
            meta: [
                { icon: "lucide:calendar", label: m.edu_3_period() },
                { icon: "lucide:school", label: m.edu_3_school() },
                { icon: "lucide:map-pin", label: m.edu_3_location() },
            ],
            description: m.edu_3_description(),
            icon: "lucide:graduation-cap",
        },
    ];
</script>

<Layout.Root>
    <Layout.Row id="bio" title={m.about_layout_bio()}>
        <Layout.Aside />
        <Layout.Main>
            <div class="flex flex-col gap-6">
                {#each bio as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </div>
        </Layout.Main>
    </Layout.Row>
    <Layout.Row id="experience" title={m.about_layout_xp()}>
        <Layout.Aside />
        <Layout.Main>
            <div class="flex flex-col gap-6">
                <Timeline items={workExperience} />
            </div>
        </Layout.Main>
    </Layout.Row>
    <Layout.Row id="education" title={m.about_layout_edu()}>
        <Layout.Aside />
        <Layout.Main>
            <div class="flex flex-col gap-6">
                <Timeline items={education} />
            </div>
        </Layout.Main>
    </Layout.Row>
</Layout.Root>
