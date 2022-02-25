var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from 'request-promise-native';
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = yield request(`https://swapi.dev/api/people/1024/`, { json: true });
            const homeworld = yield request(body.homeworld, { json: true });
            console.log(homeworld.name);
        }
        catch (err) {
            console.error(err);
        }
    });
})();
