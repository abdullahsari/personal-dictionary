import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlossaryOverviewComponent } from './components/glossary-overview/glossary-overview.component';

export const declarations = [GlossaryOverviewComponent];

const routes: Routes = [
    {
        path: '',
        component: GlossaryOverviewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GlossaryRoutingModule {}
