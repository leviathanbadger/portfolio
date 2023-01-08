import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/shared/services/project.service';
import { ManagedProject } from 'src/shared/models/project';
import { Result } from 'src/shared/models/result';
import { ProjectProvider } from '../../providers/project-provider';

@Component({
  templateUrl: './vulkan-rust.component.html',
  styleUrls: ['./vulkan-rust.component.scss'],
  providers: [ProjectProvider]
})
export class VulkanRustComponent {
  projectResult$!: Observable<Result<ManagedProject>>;

  constructor(
    private projectService: ProjectService,
    private projectProvider: ProjectProvider
  ) { }

  ngOnInit() {
    this.projectResult$ = this.projectService.findBySlug('vulkan-rust-game-engine');
    this.projectProvider.projectResult$ = this.projectResult$;
  }
}
