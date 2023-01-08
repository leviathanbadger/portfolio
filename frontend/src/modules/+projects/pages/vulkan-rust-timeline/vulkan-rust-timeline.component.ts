import { Component } from '@angular/core';
import { ProjectProvider } from '../../providers/project-provider';

@Component({
  templateUrl: './vulkan-rust-timeline.component.html',
  styleUrls: ['./vulkan-rust-timeline.component.scss'],
  providers: [ProjectProvider]
})
export class VulkanRustTimelineComponent {
  constructor() { }
}
