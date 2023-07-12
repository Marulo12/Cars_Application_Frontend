import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {BadgeModule} from 'primeng/badge';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ChipModule } from 'primeng/chip';
import {FileUploadModule} from 'primeng/fileupload';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';
import { SliderModule } from 'primeng/slider';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { GalleriaModule } from 'primeng/galleria';
@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ToolbarModule,
    SidebarModule,
    MenuModule,
    PanelModule,
    SplitButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    BadgeModule,
    DropdownModule,
    InputTextareaModule,
    FieldsetModule,
    CheckboxModule,
    ListboxModule,
    DividerModule,
    MessageModule,
    MessagesModule,
    ChipModule,
    FileUploadModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    PanelMenuModule,
    BreadcrumbModule,
    AccordionModule,
    ImageModule,
    TagModule,
    MenubarModule,
    SliderModule,
    ScrollTopModule,
    SkeletonModule,
    PaginatorModule,
    GalleriaModule
  ],
  exports:[
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ToolbarModule,
    SidebarModule,
    MenuModule,
    PanelModule,
    SplitButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    BadgeModule,
    DropdownModule,
    InputTextareaModule,
    FieldsetModule,
    CheckboxModule,
    ListboxModule,
    DividerModule,
    MessageModule,
    MessagesModule,
    ChipModule,
    FileUploadModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    PanelMenuModule,
    BreadcrumbModule,
    AccordionModule,
    ImageModule,
    TagModule,
    MenubarModule,
    SliderModule,
    ScrollTopModule,
    SkeletonModule,
    PaginatorModule,
    GalleriaModule
  ],
  providers:[ConfirmationService, DialogService, MessageService]
})

export class PrimengModule { }
