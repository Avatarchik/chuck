import { Job } from 'bull';
import { Conversion, IConversion } from '../models';

export interface IConversionEvent {
    [customKey: string]: any;
    type: string;
    message: string;
}

export interface IConversionJob extends Job {
    data: IConversion;
    progress(event: IConversionEvent): Promise<void>;
}

export function updateConversion(job: IConversionJob, fields: object) {
    return Conversion.findOneAndUpdate({ code: job.data.code }, { $set: fields });
}