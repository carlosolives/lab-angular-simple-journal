var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var EntriesService = (function () {
    function EntriesService(http) {
        this.http = http;
        this.URL = 'http://localhost:3000/api/journal-entries';
    }
    EntriesService.prototype.getEntrie = function () {
        return this.http.get("" + this.URL)
            .map(function (res) { return res.json(); });
    };
    EntriesService.prototype.getOneEntrie = function (id) {
        return this.http.get(this.URL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    return EntriesService;
}());
EntriesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], EntriesService);
export { EntriesService };
//# sourceMappingURL=../../../../src/app/services/entries.service.js.map