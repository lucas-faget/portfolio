type Meta = {
    icon: string;
    label: string;
};

export type TimelineItem = {
    title: string;
    description?: string;
    meta?: Meta[];
    icon?: string;
};
