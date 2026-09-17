function ConnectionStatus( {connected}: {connected: boolean}){
        return(
                <div className = "bg-gray-800 rounded-lg p-4">
                { connected? "🟢 Connected" : "🔴 Disconnected"}
                </div> 
        );
}

export default ConnectionStatus