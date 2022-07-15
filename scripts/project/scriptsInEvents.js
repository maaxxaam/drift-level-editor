


const scriptsInEvents = {

		async Edsheet_Event149(runtime, localVars)
		{
			let edited = runtime.getInstanceByUid(runtime.globalVars.EditUID);
			let prev = {zIndex: -Infinity, isStub: true};
			for (let element of runtime.objects.MapElement.getAllInstances()) {
				if (edited.testOverlap(element) && edited.zIndex > element.zIndex && element.zIndex > prev.zIndex) {
					prev = element;
				}
			};
			if (!prev.isStub){
				edited.moveAdjacentToInstance(prev, false);
			}
		},

		async Edsheet_Event151(runtime, localVars)
		{
			let edited = runtime.getInstanceByUid(runtime.globalVars.EditUID);
			let next = {zIndex: Infinity, isStub: true};
			for (let element of runtime.objects.MapElement.getAllInstances()) {
				if (edited.testOverlap(element) && edited.zIndex < element.zIndex && element.zIndex < next.zIndex) {
					next = element;
				}
			};
			if (!next.isStub) {
				edited.moveAdjacentToInstance(next, true);
			}
		},

		async Edsheet_Event246(runtime, localVars)
		{
			const furl = localVars.ImageName + ".png";
			const link = await runtime.assets.getProjectFileUrl(furl);
			runtime.callFunction("LoadBackground", link);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

