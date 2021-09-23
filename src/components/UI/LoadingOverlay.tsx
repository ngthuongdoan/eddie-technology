import React from 'react';
import { createPortal } from 'react-dom';
import ClassNameProps from '../../model/ClassNameProps';

type OverlayProps = {
  close?: () => void;
};

const defaultProps = {
  close: () => {},
};

const Backdrop: React.FC<OverlayProps & ClassNameProps> = ({ className, close }): JSX.Element => {
  return <div className={`backdrop ${className}`} onClick={close} aria-hidden="true"></div>;
};

const LoadingOverlay: React.FC<OverlayProps & ClassNameProps> = ({ className, close }): JSX.Element => {
  return (
    <div className={`modal ${className}`}>
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Loading: React.FC<OverlayProps & ClassNameProps> = ({ className, close }): JSX.Element => {
  // Black background
  const backdropContainer = document.getElementById('backdrop-overlay');
  // Modal Content
  const loadingOverlay = document.getElementById('loading-overlay');
  return (
    <>
      {createPortal(<Backdrop close={close}></Backdrop>, backdropContainer!)}
      {createPortal(<LoadingOverlay close={close}></LoadingOverlay>, loadingOverlay!)}
    </>
  );
};

Backdrop.defaultProps = defaultProps;
LoadingOverlay.defaultProps = defaultProps;
Loading.defaultProps = defaultProps;

export default Loading;
