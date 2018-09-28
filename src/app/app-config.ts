import { Protocol } from "./services/config/protocol.enum";
import { BackendConfig } from "./services/config/backend-config";

export const backendConfig: BackendConfig = {
    protocol: Protocol.https,
    host: 'warehouse-elzjvpntmq.now.sh',
    path: 'api/v1'
}
