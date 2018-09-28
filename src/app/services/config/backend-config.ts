import { Protocol } from "./protocol.enum";

export interface BackendConfig {
    protocol: Protocol,
    host: string,
    path: string
}