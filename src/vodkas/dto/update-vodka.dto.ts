import { PartialType } from "@nestjs/mapped-types";
import { CreateVodkaDto } from "./create-vodka.dto";

export class UpdateVodkaDto extends PartialType(CreateVodkaDto) { }
