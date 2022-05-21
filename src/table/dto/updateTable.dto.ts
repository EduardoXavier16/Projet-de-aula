import { PartialType } from "@nestjs/mapped-types";

export class UpdateTAbleDto extends PartialType(CreateDtoTable) {}
