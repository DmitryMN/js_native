import React from 'react'
import './lesson_4';

type HandlePromiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const handlePromise: HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName) => {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError: (paramName) => {
        console.log(`Promise is rejected with error: ${paramName}`);
    },
}

// @ts-ignore
window.promObj = handlePromise;

const Lesson4 = () => {

    const createPromise = () => {
        handlePromise.promise = new Promise((res, rej) => {
            handlePromise.resolve = res;
            handlePromise.reject = rej;
        });
        handlePromise.promise
            .then(handlePromise.onSuccess)
            .catch(handlePromise.onError);
    }

    const resolvePromise = () => {
        handlePromise.resolve && handlePromise.resolve("Success");
    }

    const rejectPromise = () => {
        handlePromise.reject && handlePromise.onError("Error");
    }

    return (
        <div>
            <button onClick={createPromise} id='btn-create-promise'>Create Promise</button>
            <button onClick={resolvePromise} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={rejectPromise} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;