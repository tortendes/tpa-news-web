<template>
    <div class="px-4 py-2 flex gap-2 border-[1px] items-center border-yellow-500 mx-4">
        <span class="text-yellow-500">
            <UIcon name="line-md:alert-circle" class="size-8" />
        </span>
        <div class="flex flex-col">
            <h1 class="text-xl">
                <slot name="title" mdc-unwrap="p" />
            </h1>
            <p class="text-sm text-gray-600">
                <slot name="description" mdc-unwrap="p" />
            </p>
        </div>
    </div>
</template>