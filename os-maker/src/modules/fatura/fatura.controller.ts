import { 
    Controller, 
    Get, 
    Post, 
    Patch, 
    Param, 
    Body, 
    Query,
    ParseUUIDPipe,
    HttpCode,
    HttpStatus
} from "@nestjs/common";
import { FaturasService } from "./faturas.service";
import { CreateFaturaDto } from "./criar-fatura.dto";
import { FiltrarFaturaDto } from "./filtrar-fatura.dto";
import { UpdateFaturaDto } from "./atualizar-fatura.dto";
import { UpdateStatusDto } from "./atualizar-status.dto";

@Controller('faturas')
export class FaturaController {
    constructor(private readonly faturasService: FaturasService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createFaturaDto: CreateFaturaDto) {
        return this.faturasService.criarFatura(createFaturaDto);
    }

    @Get()
    async findAll(@Query() filterDto: FiltrarFaturaDto) {
        return this.faturasService.findAll(filterDto);
    }

    @Get(':id')
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.faturasService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateFaturaDto: UpdateFaturaDto
    ) {
        return this.faturasService.update(id, updateFaturaDto);
    }

    @Patch(':id/status')
    @HttpCode(HttpStatus.OK)
    async updateStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateStatusDto: UpdateStatusDto
    ) {
        return this.faturasService.updateStatus(id, updateStatusDto.status);
    }
}
