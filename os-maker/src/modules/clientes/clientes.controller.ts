import { Controller, Get, Post, Put, Delete, Param, Body, Query, NotFoundException, BadRequestException, HttpCode, HttpStatus } from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClienteDto } from "./clientes.dto";
import { UpdateClienteDto } from "./atualizar-cliente.dto";

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createClienteDto: CreateClienteDto) {
        return this.clientesService.create(createClienteDto);
    }
    @Get()
    async findAll(@Query() query: string) {
        return this.clientesService.findAll(query);
    }
    @Get(':cnpj')
    async findOne(@Param('cnpj') cnpj: string) {
        return this.clientesService.findOne(cnpj);
    }
    @Put(':cnpj')
    async update(@Param('cnpj') cnpj: string, @Body() updateClienteDto: UpdateClienteDto) {
        return this.clientesService.update(cnpj, updateClienteDto);
    }
    @Delete(':cnpj')
    async delete(@Param('cnpj') cnpj: string) {
        return this.clientesService.delete(cnpj);
    }
}