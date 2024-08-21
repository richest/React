const environment_type = 'local';
export const defaultValues = {
    'environment_type':'local',
    'local':{
        'paginageLimit':2,
        'baseurl':'http://192.168.1.161:8080'
    },
    'staging':{
        'paginageLimit':10,
        //'baseurl':'https://staging.domainname.com'
    },
    'production':{
        'paginageLimit':10,
        //'baseurl':'https://domainname.com'
    }
}
