import { FormGroup } from "@angular/forms";

export function dataPresentValidatoer(data :any) {
    if (data !== null) {
        return null;
    }
    else {
        return { dataPresent: true };
    }
}