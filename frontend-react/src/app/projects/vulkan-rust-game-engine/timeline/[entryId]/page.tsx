

function VulkanRustTimelineEntry({ params }: { params: { entryId: string } }) {
    return (
        <div>
            Hello, Vulkan Rust Game Engine (timeline entry: [{params.entryId}])!
        </div>
    );
}

export default VulkanRustTimelineEntry;
